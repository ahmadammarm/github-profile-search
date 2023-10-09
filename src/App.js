import Input from "./components/Input";

function App() {
  return (
    <div className="
      flex
      flex-col
      items-center
      justify-center
      mt-10
      mb-10
    ">
      <h3 className="
        text-2xl
        text-gray-800
        font-bold
        mb-5
      ">
        Github User Generator
      </h3>
      <Input />
    </div>
  );
}

export default App;
