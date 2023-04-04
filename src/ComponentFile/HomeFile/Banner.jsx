import "./Banner.css";

const Banner = () => {

    return (

        <div className="banner-style">

            <div className="carousel">
                <div id="item1" className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                </div>
                <div id="item2" className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1604480133080-602261a680df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                </div>
                <div id="item3" className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1596357395104-ba989e72b5ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
                </div>
                <div id="item4" className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                </div>
                <div id="item5" className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                </div>
            </div>
            <div className="flex justify-center py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">4</a>
            </div>

        </div>

    );
};

export default Banner;