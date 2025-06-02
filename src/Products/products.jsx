import React from 'react';
import './products.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import productDetail from '../Products/product.json';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    toast.success("Added To Cart", {
      position: "bottom-right"
    });
    dispatch(addToCart(item));
  };

  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productTopBannerItems">Electronics</div>
        <div className="productTopBannerItemsSubMenu">Mobiles & Accessories</div>
        <div className="productTopBannerItemsSubMenu">Laptops & Accessories</div>
        <div className="productTopBannerItemsSubMenu">TV & Home Entertainment</div>
        <div className="productTopBannerItemsSubMenu">Audio</div>
        <div className="productTopBannerItemsSubMenu">Cameras</div>
        <div className="productTopBannerItemsSubMenu">Computer Peripherals</div>
        <div className="productTopBannerItemsSubMenu">Smart Technology</div>
        <div className="productTopBannerItemsSubMenu">Musical Instruments</div>
        <div className="productTopBannerItemsSubMenu">Office & Stationary</div>
      </div>

      <div className="productsPageMain">
        <div className="productsPageMainLeftCategory">
          <div className="productsPageMainLeftCategoryTitle">Category</div>
          <div className="productsPageMainLeftCategoryContent">
            <div className="productsPageMainLeftCategoryTitleContent">Computers & Accessories</div>
            <div className="productsPageMainLeftCategoryContentSub">Macbooks</div>

            <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

            {/* Rating Filters */}
            {[4, 3, 2, 1].map((rating) => (
              <div className="ratingLeftBox" key={rating}>
                {[...Array(5)].map((_, i) =>
                  i < rating ? (
                    <AiFillStar key={i} style={{ fontSize: 20, color: "#febd69" }} />
                  ) : (
                    <AiOutlineStar key={i} style={{ fontSize: 20, color: "#febd69" }} />
                  )
                )}
                <div className="andUp"> & Up</div>
              </div>
            ))}
          </div>
        </div>

        <div className="productsPageMainRight">
          <div className="productsPageMainRightTopBanner">
            1-5 of 5 results for <span className='productsPageMainRightTopBannerSpan'>Macbooks</span>
          </div>

          <div className="itemsImageProductPage">
            {productDetail.product.map((item, index) => (
              <div className="productCard" key={index}>
                <img src={item.image} alt={item.name} className="productImage" />
                <div className="productName">{item.name}</div>
                <div className="productPrice">R{item.price}</div>
                <div className="productRating">
                  {[...Array(5)].map((_, i) =>
                    i < item.rating ? (
                      <AiFillStar key={i} style={{ color: "#febd69" }} />
                    ) : (
                      <AiOutlineStar key={i} style={{ color: "#febd69" }} />
                    )
                  )}
                </div>
                <button className="addToCartBtn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Products;
