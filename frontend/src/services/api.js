const BASE_URL = "http://localhost:8000/api";

// OWNER → Add menu
// export const addMenu = async (formData) => {
//   const response = await fetch(`${BASE_URL}/add-menu/`, {
//     method: "POST",
//     body: formData
//   });

//   return response.json();
// };

// // CUSTOMER → Get menu
// export const getMenu = async () => {
//   const response = await fetch(`${BASE_URL}/menu/`);
//   return response.json();
// };






//
export async function getMenuApi() {
  try {
    const res = await fetch(`${BASE_URL}/menu/`);
    if (!res.ok) throw new Error("Failed to fetch menu");
    return await res.json();
  }
  catch (error){
    console.error("getMenuApi error:", error);
    return [];
  }

}

export async function addMenuApi(formData) {
  try{
    const res = await fetch(`${BASE_URL}/add-menu/`,{
      method: "POST",
      body: formData,
    });
    return await res.json();
  }catch (error) {
    console.error("addMenuApi error:", error);
  }
}

export async function updateMenuApi(id,formData) {
  try{
    const res = await fetch(`${BASE_URL}/update-menu/${id}/`,{
      method: "POST",
      body: formData,
    });
    return await res.json();
  }catch(error){
    console.error("updateMenuApi error",error);
  }
}

export async function deleteMenuApi(id) {
  try{
    const res = await fetch(`${BASE_URL}/delete-menu/${id}/`,{
      method: "DELETE",
    });
    return await res.json();
  } catch (error) {
    console.error("delete error:",error)
  }
}