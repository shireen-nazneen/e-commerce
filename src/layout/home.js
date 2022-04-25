import Categories from "../components/categories/categories";
import Product from "../components/product"

const Homelayout = (props) => {
  const { categories, Products } = props;
  return (
    <div className="container">
      <Categories categories={categories} />
      <br />
      <div className="row">
        {
          Products?.map((item, i) => {
            return (
              <Product item={item} key={i} />
            )
          })
        }
      </div>

    </div>
  );
};
export default Homelayout;
