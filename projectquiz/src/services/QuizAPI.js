
export default class QuizAPI {
    static async getQuiz(){
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
                  }
          };
          try {
             const response = await fetch(`http://127.0.0.1:5000/todo/api/v1.0/quiz`, options);
             const json = await response.json();
             console.log(json['questionnaires']);
             return json;
          } catch (error){
                console.log("error");
                return null;
          }
    }

    static async getQuestion(id){
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
                  }
          };
          try {
             const response = await fetch(`http://127.0.0.1:5000/todo/api/v1.0/question/byquiz/`+id, options);
             const json = await response.json();
             console.log(json);
             return json;
          } catch (error){
                console.log("error");
                return null;
          }
    }
    static async getQuestionById(id){
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
                  }
          };
          try {
             const response = await fetch(`http://127.0.0.1:5000/todo/api/v1.0/question/`+id, options);
             const json = await response.json();
             console.log(json);
             return json;
          } catch (error){
                console.log("error");
                return null;
          }
    }

    static async updateQuestion(id, data){
        const options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
                  },
            body: JSON.stringify(data)
          };
          try {
            const response = await fetch(`http://127.0.0.1:5000/todo/api/v1.0/question/`+id, options);
            const json = await response.json();
            return true;
         } catch (error){
               console.log("error");
               return false;
         }
    } 
    static async deleteQuestion(id){
        const options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
                  },
            body: JSON.stringify(id)
          };
          try {
            const response = await fetch(`http://127.0.0.1:5000/todo/api/v1.0/question/`+id, options);
            const json = await response.json();
            return true;
         } catch (error){
               console.log("error");
               return false;
         }
    }
}