import '../blogpost/styles/blog.css'

export default function Content() {
  return (
    <article>
        <div className="card">
          <div className="card-image-container">
              <img src="src/blogpost/assets/sky-with-clouds-during-sunset-free-photo.webp"alt="Post Image" className='main-image'/>
          </div>
         
                <div className='cardContent'>
                    <div className="innerCard">
                        <div className="countryName">
                            <img src="src/blogpost/assets/globe (1).png"className="countLogo"alt="Country logo"/>
                            <p>JAPAN</p>
                            <a href="#" className='link'>View on google maps</a>
                        </div>
                        <h2 className='entry-marker'>Mount fuji</h2>
                        <h6 className=''>12 Jan,2021 - 24 Jan,2021</h6>
                    <p className='entry-description'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repudiandae quaerat voluptate laboriosam eaque illum consequatur,
                    nesciunt alias tenetur ipsa soluta cupiditate vero autem
                    excepturi, minima inventore harum animi impedit dolores! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>    
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          laudantium error nihil? Excepturi facere aut sed suscipit similique
          quia, veritatis expedita. Deserunt ab doloribus quisquam quaerat,
          culpa voluptatum expedita ut! elit. Odio laudantium error nihil?
          Excepturi facere aut sed suscipit similique quia, veritatis expedita.
          Deserunt ab doloribus quisquam quaerat, culpa voluptatum expedita ut!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          laudantium error nihil? Excepturi facere aut sed suscipit similique
          quia, veritatis expedita. Deserunt ab doloribus quisquam quaerat,
          culpa voluptatum expedita ut! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio laudantium error nihil? Excepturi facere aut
          sed suscipit similique quia, veritatis expedita. Deserunt ab doloribus
          quisquam quaerat, culpa voluptatum expedita ut! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Odio laudantium error nihil?
          Excepturi facere aut sed suscipit similique quia, veritatis expedita.
          Deserunt ab doloribus quisquam quaerat, culpa voluptatum expedita ut!
        </p>
    </article>
  );
}
