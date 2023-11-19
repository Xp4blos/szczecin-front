interface UserDataInterface {
    name: string;
    lastName: string;
    email: string;
    imagePath: string;
  }
  
  interface ApiResponseUser {
    data: UserDataInterface[];
    success: boolean;
    message: string;
  }