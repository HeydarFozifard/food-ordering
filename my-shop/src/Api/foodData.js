//get the data from api
import axios from "axios";
const foodData = async () => {
    const get = await axios.get(
        "https://6297728714e756fe3b30503c.mockapi.io/food"
    );
    return get.data;
};

export { foodData };
