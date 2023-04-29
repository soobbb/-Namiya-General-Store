export const POST = "POST";
export const DELETE = "DELETE";
export const postCounselor = (id,title, counselorBody) => {
  return {
    type: POST,
    payload: {
      id,
      title,
      counselorBody,
    },
  };
};
export const deleteCounselor = (id) => {
  return {
    type: DELETE,
    payload: {
      id,
    },
  };
};