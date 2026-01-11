import { useEffect, useState } from "react";
import "../styles/global.css";
import { getMenuApi,addMenuApi,updateMenuApi,deleteMenuApi } from "../services/api";


export default function OwnerDashboard() {
    const [menu ,setMenu] = useState([]);
    const [formData ,setFormData] = useState({
        id: null,
        name: "",
        price: "",
        image: null,
    });

    const loadMenu = async() => {
        const data =  await getMenuApi();
        setMenu(data);
    };
    useEffect(() => {
        loadMenu();
    }, []);

    const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("price", formData.price);
    if (formData.image) fd.append("image", formData.image);

    if (formData.id) {
      await updateMenuApi(formData.id, fd);
    } else {
      await addMenuApi(fd);
    }

    setFormData({ id: null, name: "", price: "", image: null });
    loadMenu();
    };
    const handleEdit = (item) => {
    setFormData({
      id: item.id,
      name: item.name,
      price: item.price,
      image: null,
    });
    };
    const handleDelete = async (id) => {
    await deleteMenuApi(id);
    loadMenu();
    };
    return (
    <div className="owner-container">
      {/* LEFT FORM */}
      <div className="box form-box">
        <h3>{formData.id ? "Update Menu" : "Add Menu"}</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Item name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
          <input type="file" name="image" onChange={handleChange} />

          <button type="submit">
            {formData.id ? "Update" : "Save"}
          </button>
        </form>
      </div>

      {/* RIGHT LIST */}
      <div className="box list-box">
        <h3>Menu List</h3>

        {menu.map((item) => (
          <div key={item.id} className="menu-item">
            <span>
              {item.name} – ₹{item.price}
            </span>
            <div>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}








// import { useState } from "react";
// import { addMenu } from "../services/api";
// import "../styles/global.css";

// function OwnerDashboard() {
//     const [name,setName]=useState("");
//     const [price,setPrice]=useState("");
//     const [image,setImage]=useState(null);

//     const submitMenu = () => {
//         const formData = new FormData();
//         formData.append("name",name);
//         formData.append("price", price);
//         formData.append("image", image);
    
//         addMenu(formData);
//         setName("");
//         setPrice("");
//         setImage(null);

//     };

//     return (
//         <>
//         <div className="owner-form card">
//             <h3>Add Menu</h3>
//             <input 
//             placeholder="Item Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             />
//             <input placeholder="item Price" 
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             />
//             <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files[0])} />
//             <button onClick={submitMenu}>Add</button>
//         </div>
//         </>
          


//     );
// }

// export default OwnerDashboard;  