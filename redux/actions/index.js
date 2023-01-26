export const getProducts = () => async (dispatch) => {
  const testNetWork = await fetch("https://api.sampleapis.com/coffee/hot");
  const data = await fetch(
    "https://6222994f666291106a29f999.mockapi.io/api/v1/products"
  );
  let parse = await data.json();
  try {
    dispatch({
      type: "GET_PRODUCTS",
      payload: parse.slice(0, 5),
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error,
    });
  }
};
export const getFilter = (newArr) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_FILTER",
      payload: newArr,
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error,
    });
  }
};
export const updatePoints = (points) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_POINTS",
      payload: points,
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error,
    });
  }
};
