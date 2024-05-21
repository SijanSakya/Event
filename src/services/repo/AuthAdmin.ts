export const loginAdmin = async (PhoneNo: number, Password:any) => {
    try {
      let response = await fetch(
        "",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ PhoneNo: PhoneNo, Password: Password }),
        }
      );
      let { responseData, error } = await response.json();
      if (error) {
        throw Error(JSON.stringify(error));
      }
    } catch (error) {
      console.log("login error", error);
      throw Error("error");
    }
  };
  