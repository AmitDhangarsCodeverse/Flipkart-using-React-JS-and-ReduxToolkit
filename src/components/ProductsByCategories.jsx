import { useEffect } from "react";
import Loading from "./loader";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../slices/ProductsSlice";
import { useProductDetails } from "../hooks/useProductDetails";
const ProductsByCategories = () => {
  const dispatch = useDispatch();
  const { data, loading, err } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(FetchProducts);
  }, [dispatch]);
  const { getdetails } = useProductDetails(data);
  return (
    <>
      <div className="productsbycategories">
        <div className="category-wrapper bg-white xs:rounded-md shadow-md shadow-blue-400 border-2 border-blue-400 xs:m-1 lg:m-1 xl:m-3">
          <h1 className="font-semibold border-b-2 xs:py-1 mb-1 px-1 mx-1">Clothes</h1>
          <div className="clothes-category flex justify-evenly items-center flex-wrap xs:m-1 p-1 lg:m-1 xl:m-3">
            {err && (
              <p className=" error text-center xs:pb-4 flex justify-center items-center flex-col">
                <img
                  src="https://cdn-icons-png.freepik.com/512/9474/9474058.png"
                  alt=""
                  className="h-10 xs:h-4 sm:h-5 lg:h-8 xl:h-10"
                />
                {err}
              </p>
            )}
            {loading && <Loading />}
            {data &&
              (() => {
                const finaldata = data.filter(
                  (item) => item.id >= 1 && item.id <= 10
                );
                if (finaldata.length === 0 && !err) {
                  return (<div className="flex flex-col items-center"><img src={"https://assets-v2.lottiefiles.com/a/9c2b07a8-1182-11ee-8416-5301fcba3685/imMRI3sikr.gif"} alt="" className="xs:h-10 md:h-20 lg:h-36"/><p className="unavailable">Sorry,currently products are not available !</p> </div>);
                } else {
                  return finaldata.map((clothesItem) => (
                    <div
                      key={clothesItem.id}
                      className="Product border-[2px] border-blue-200 rounded-md shadow-md shadow-blue-200 flex justify-center items-center flex-col xs:px-1 py-1 m-1"
                      onClick={() => getdetails(clothesItem.id)}
                    >
                      <img
                        src={clothesItem.images[0]}
                        alt=""
                        className="rounded-sm cursor-pointer xs:h-12 sm:h-16 md:h-24 lg:h-34 xl:h-40"
                      />
                      <p className="product-title">
                        {clothesItem.title.slice(0, 12) + ".."}
                      </p>
                      <p className="product-price font-semibold py-1">
                        Under ₹{clothesItem.price}
                      </p>
                    </div>
                  ));
                }
              })()}
          </div>
        </div>
        <div className="category-wrapper bg-white xs:rounded-md shadow-md shadow-blue-400 border-2 border-blue-400 xs:m-1 lg:m-1 xl:m-3">
          <h1 className="font-semibold border-b-2 xs:py-1 mb-1 px-1 mx-1">Furniture</h1>
          <div className="furniture-category flex justify-evenly items-center flex-wrap xs:m-1 lg:m-1 xl:m-3">
            {err && (
              <p className=" error text-center xs:pb-4 flex justify-center items-center flex-col">
                <img
                  src="https://cdn-icons-png.freepik.com/512/9474/9474058.png"
                  alt=""
                  className="h-10 xs:h-4 sm:h-5 lg:h-8 xl:h-10"
                />
                {err}
              </p>
            )}
            {loading && <Loading />}
            {data &&
              (() => {
                const finaldata = data.filter(
                  (item) => item.id >= 30 && item.id <= 34
                );

                if (finaldata.length === 0 && !err) {
                  return (<div className="flex flex-col items-center"><img src={"https://assets-v2.lottiefiles.com/a/9c2b07a8-1182-11ee-8416-5301fcba3685/imMRI3sikr.gif"} alt="" className="xs:h-10 md:h-20 lg:h-36"/><p className="unavailable">Sorry,currently products are not available !</p> </div>);
                } else {
                  return finaldata.map((furitem) => (
                    <div
                      key={furitem.id}
                      className="Product border-[2px] border-blue-200 rounded-md shadow-md shadow-blue-200 flex justify-center items-center flex-col xs:px-1 py-1 m-1"
                      onClick={() => getdetails(furitem.id)}
                    >
                      <img
                        src={furitem.images[0]}
                        alt=""
                        className="rounded-sm cursor-pointer xs:h-12 sm:h-16 md:h-24 lg:h-34 xl:h-40"
                      />
                      <p className="product-title">
                        {furitem.title.slice(0, 12) + ".."}
                      </p>
                      <p className="product-price font-semibold py-1">
                        Under ₹{furitem.price}
                      </p>
                    </div>  
                  ));
                }
              })()}
          </div>
        </div>
        <div className="category-wrapper bg-white xs:rounded-md shadow-md shadow-blue-400 border-2 border-blue-400 xs:m-1 lg:m-1 xl:m-3">
          <h1 className="font-semibold border-b-2 xs:py-1 mb-1 px-1 mx-1">Footware</h1>
          <div className="footware-category flex justify-evenly items-center flex-wrap bg-white xs:m-1 lg:m-1 xl:m-3">
            {err && (
              <p className=" error text-center xs:pb-4 flex justify-center items-center flex-col">
                <img
                  src="https://cdn-icons-png.freepik.com/512/9474/9474058.png"
                  alt=""
                  className="xs:h-4 sm:h-5 lg:h-8 xl:h-10"
                />
                {err}
              </p>
            )}
            {loading && <Loading />}
            {data &&
              (() => {
                const finaldata = data.filter(
                  (item) => item.id >= 35 && item.id <= 40
                );
                if (finaldata.length === 0 && !err) {
                  return (<div className="flex flex-col items-center"><img src={"https://assets-v2.lottiefiles.com/a/9c2b07a8-1182-11ee-8416-5301fcba3685/imMRI3sikr.gif"} alt="" className="xs:h-10 md:h-20 lg:h-36"/><p className="unavailable">Sorry,currently products are not available !</p> </div>);
                } else {
                  return finaldata.map((footwareItem) => (
                    <div
                      key={footwareItem.id}
                      className="Product border-[2px] border-blue-200 rounded-md shadow-md shadow-blue-200 flex justify-center items-center flex-col xs:px-1 py-1 m-1"
                      onClick={() => getdetails(footwareItem.id)}
                    >
                      <img
                        src={footwareItem.images[0]}
                        alt=""
                        className="rounded-sm cursor-pointer xs:h-12 sm:h-16 md:h-24 lg:h-34 xl:h-40"
                      />
                      <p className="product-title">
                        {footwareItem.title.slice(0, 12) + ".."}
                      </p>
                      <p className="product-price font-semibold py-1">
                        Under ₹{footwareItem.price}
                      </p>
                    </div>
                  ));
                }
              })()}
          </div>
        </div>
        <div className="category-wrapper bg-white xs:rounded-md shadow-md shadow-blue-400 border-2 border-blue-400 xs:m-1 lg:m-1 xl:m-3">
          <h1 className="font-semibold border-b-2 xs:py-1 mb-1 px-1 mx-1">Miscellaneous</h1>
          <div className="miscellaneous-category flex justify-evenly items-center flex-wrap bg-white xs:m-1 lg:m-1 xl:m-3">
            {err && (
              <p className=" error text-center xs:pb-4 flex justify-center items-center flex-col">
                <img
                  src="https://cdn-icons-png.freepik.com/512/9474/9474058.png"
                  alt=""
                  className="xs:h-4 sm:h-5 lg:h-8 xl:h-10"
                />
                {err}
              </p>
            )}
            {loading && <Loading />}
            {data &&
              (() => {
                const finaldata =data.filter(
                  (item) => item.id >= 41 && item.id <= 50
                );
                if(finaldata.length === 0 && !err) {
                  return (<div className="flex flex-col items-center"><img src={"https://assets-v2.lottiefiles.com/a/9c2b07a8-1182-11ee-8416-5301fcba3685/imMRI3sikr.gif"} alt="" className="xs:h-10 md:h-20 lg:h-36"/><p className="unavailable">Sorry,currently products are not available !</p> </div>);
                }
                 else {
                  return finaldata.map((miscItem) => (
                    <div
                      key={miscItem.id}
                      className="Product border-[2px] border-blue-200 rounded-md shadow-md shadow-blue-200 flex justify-center items-center flex-col xs:px-1 py-1 m-1"
                      onClick={() => getdetails(miscItem.id)}
                    >
                      <img
                        src={miscItem.images[0]}
                        alt=""
                        className="rounded-sm cursor-pointer xs:h-12 sm:h-16 md:h-24 lg:h-34 xl:h-40"
                      />
                      <p className="product-title">
                        {miscItem.title.slice(0, 12) + ".."}
                      </p>
                      <p className="product-price font-semibold py-1">
                        Under ₹{miscItem.price}
                      </p>
                    </div>
                  ));
                }
              })()
            }
          </div>
        </div>
        <div className="category-wrapper bg-white xs:rounded-md shadow-md shadow-blue-400 border-2 border-blue-400 xs:m-1 lg:m-1 xl:m-3">
          <h1 className="font-semibold border-b-2 xs:py-1 mb-1 px-1 mx-1">Electronics</h1>
          <div className="furniture-category flex justify-evenly items-center flex-wrap bg-white xs:m-1 lg:m-1 xl:m-3">
            {err && (
              <p className=" error text-center xs:pb-4 flex justify-center items-center flex-col">
                <img
                  src="https://cdn-icons-png.freepik.com/512/9474/9474058.png"
                  alt=""
                  className="xs:h-4 sm:h-5 lg:h-8 xl:h-10"
                />
                {err}
              </p>
            )}
            {loading && <Loading />}
            {data &&
              (() => {
                const finaldata = data.filter(
                  (item) => item.id >= 20 && item.id <= 29
                );
                if (finaldata.length === 0 && !err) {
                  return (<div className="flex flex-col items-center"><img src={"https://assets-v2.lottiefiles.com/a/9c2b07a8-1182-11ee-8416-5301fcba3685/imMRI3sikr.gif"} alt="" className="xs:h-10 md:h-20 lg:h-36"/><p className="unavailable">Sorry,currently products are not available !</p> </div>);
                } else {
                  return finaldata.map((elecItem) => (
                    <div
                      key={elecItem.id}
                      className="Product border-[2px] border-blue-200 rounded-md shadow-md shadow-blue-200 flex justify-center items-center flex-col xs:px-1 py-1 m-1"
                      onClick={() => getdetails(elecItem.id)}
                    >
                      <img
                        src={elecItem.images[0]}
                        alt=""
                        className="rounded-sm cursor-pointer xs:h-12 sm:h-16 md:h-24 lg:h-34 xl:h-40"
                      />
                      <p className="product-title">
                        {elecItem.title.slice(0, 12) + ".."}
                      </p>
                      <p className="product-price font-semibold py-1">
                        Under ₹{elecItem.price}
                      </p>
                    </div>
                  ));
                }
              })()
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsByCategories;
