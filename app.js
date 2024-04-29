const loadCategory = async () => {

  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();

  // console.log(data.data);

  const categoryBarContainer = document.getElementById('category-bar-container');
  data.data.news_category.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
    <button onclick="loadNewData('${item.category_id}')" class="btn_btn">${item.category_name}</button>
    `
    categoryBarContainer.appendChild(div);
  });


}





const loadNewData = async (catId) => {
  // console.log(catId);
  document.getElementById('loading-spiner').style.display = "block";
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);
  const data = await res.json();
  const newsContainer = document.getElementById('news-container');
  newsContainer.innerHTML = "";

  // if (data.data.length > 0) {
  //   document.getElementById('loading-spiner').style.display = "none";
  // } else {
  //   document.getElementById('loading-spiner').style.display = "block";
  // }

  data.data.forEach((item) => {
    document.getElementById('loading-spiner').style.display = "none";
    // console.log(item);
    const div = document.createElement('div');
    div.classList.add("singleNews");
    div.innerHTML = `
    <div class="news-photo">
    <img
      src=${item.thumbnail_url}
      alt=""
    />
  </div>
  <div class="news-info">
    <div class="news-header">
      <h4>${item.title.slice(0, 30)}</h4>
      <p class="news-badge">
      ${item.rating.number} <sup> <h6 class="news-rating"> ${item.rating.badge}</h6></sup>
      </p>
    </div>
    <p>${item.details.slice(0, 120)}</p>

    <div class="news-footer">
      <div class="author">
        <div class="">
          <img
            class="author-img"
            src=${item.author.img}
            alt=""
          />
        </div>
        <div class="author-info">
          <h6> ${item.author.name}</h6>
          <p>Date: ${item.author.published_date}</p>
        </div>
      </div>
      <div class="Views author">
        <img
          class="view-img"
          src="https://uxwing.com/wp-content/themes/uxwing/download/health-sickness-organs/view-icon.png"
          alt=""
        />
        <p>${item.total_view}</p>
      </div>
      <div class="details-btn-container">
        <button onclick="handleDetails('${item._id}')" class="details-btn">Details</button>
      </div>
  </div>
</div>
    `;

    newsContainer.appendChild(div);
  })
}



const handleSearch = () =>{
  const searchBox = document.getElementById('search-box');
  const searchText = searchBox.value;
  if(searchText){
    loadNewData(searchText);
  }else{
    alert('Please enter avalid catId')
  }
  
}


const handleDetails = async(news_id) =>{
  const res = await fetch(` https://openapi.programming-hero.com/api/news/${news_id}`);
  const data = await res.json();
  // console.log(data.data);
  data.data.forEach((element) =>{
    console.log(element);
  })
}


loadNewData("01");
loadCategory();