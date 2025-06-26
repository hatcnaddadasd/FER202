// import React from "react";
// import UserProfile from "./Component/UserProfile";


// const App = () => {
//   return (
//     <div className="App">
//       <h1>Ứng Dụng React</h1>

//       {/* Trường hợp hợp lệ */}
//       <UserProfile name="Nguyễn Văn A" age={25} />

//       {/* Trường hợp name không hợp lệ */}
//       <UserProfile name="" age={25} />

//       {/* Trường hợp tuổi không hợp lệ */}
//       <UserProfile name="Nguyễn Văn B" age="twenty five" />

//       {/* Trường hợp không nhập tuổi */}
//       <UserProfile name="Nguyễn Văn C" age={null} />
//     </div>
//   );
// };

// export default App;
// import React from "react";
// import UserProfile2 from "./Component/UserProfile2";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   const handleFormSubmit = (formData) => {
//     console.log("Dữ liệu đã gửi:", formData);
//   };

//   return (
//     <div className="App">
//       <h1>Ứng Dụng React</h1>
//       <UserProfile2 name="Nguyễn Văn A" age={25} onSubmit={handleFormSubmit} />
//       <UserProfile2
//         name="Nguyễn Văn B"
//         age="twenty five"
//         onSubmit={handleFormSubmit}
//       />
//       <UserProfile2 name="" age={30} onSubmit={handleFormSubmit} />
//     </div>
//   );
// };

// export default App;
// import React from "react";
// import MyForm from "./Component/MyForm";
// import 'bootstrap/dist/css/bootstrap.min.css';



// const App = () => {
//   const handleFormSubmit = (formData) => {
//     console.log("Dữ liệu đã gửi:", formData);
//   };

//   return (
//     <div className="App">
//       <h1>Ứng Dụng React</h1>
//       <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
//     </div>
//   );
// };

// export default App;

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from "./Component/RegistrationForm";

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };

  return (
    <div className="App">
      <h1>Ứng Dụng React</h1>
      <RegistrationForm
        title="Form Đăng Ký"
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default App;