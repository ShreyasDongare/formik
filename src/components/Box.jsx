
import food from "../assets/food.jpg";
import Form from "./Form";
const Box = () => {
  return (
    <div className="h-[600px] w-[1200px] bg-[#cecece]  shadow-xl rounded-lg flex justify-center items-center overflow-hidden">
      <div className=" h-full w-[500px] flex justify-center items-center">

       <Form />
      </div>
      <div className="w-[700px] h-full flex justify-center items-center overflow-hidden">
        <img className="object-cover h-full w-full " src={food} alt="" />
      </div>
    </div>
  );
};

export default Box;
