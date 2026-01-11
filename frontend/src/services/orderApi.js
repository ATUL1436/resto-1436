const BASE_URL='http://localhost:8000';

export default async function placeOrderApi(orderData) {
    try {
        const res = await fetch(`${BASE_URL}/place-order/`,
            {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(orderData), 
            }
        );
        return await res.json();
    }catch(error){
        console.error("Order Placement failed:",error);
    }
}
