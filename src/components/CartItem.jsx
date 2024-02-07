
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="w-[500px]">

        <div className="flex justify-center">
          <img src={item.image} width={200} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold">{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p className="font-bold">{item.price}</p>
            <div
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
