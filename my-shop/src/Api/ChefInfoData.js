import axios from "axios";
const ChefInfoData = async () => {
    const getChefData = await axios.get(
        "https://631097cd826b98071a4568d0.mockapi.io/chefInfo"
    );

    return getChefData.data;
};

export { ChefInfoData };
