import axios from 'axios';

const STUDIO_BACKGROUND_IMAGE_API_BASE_URL = "http://localhost:8080/api/studio-background-image";
const STUDIO_BACKGROUND_IMAGE_CHARACTER_API_BASE_URL = "http://localhost:8080/api/studio-background-image-character";

class BackGroundService {

    getBackgroundImage(){
        return axios.get(STUDIO_BACKGROUND_IMAGE_API_BASE_URL);
    }

    getBackgroundImageCharacter(){
        return axios.get(STUDIO_BACKGROUND_IMAGE_CHARACTER_API_BASE_URL);
    }
}


/*const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employee";

 class BackGroundService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
} */

export default new BackGroundService()