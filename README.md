# Portfilo

## Stack
- Nest.js
- Next.jS
- Redux
- i18next
- [ReactDnD](https://react-dnd.github.io/react-dnd/about)
- [AntDesign components](https://ant.design/)


Acceptance:
- Correct usage of eslint
- No custom components, only Antd components
- Correct file separation and structure
- Usage of [custom react hooks](https://reactjs.org/docs/hooks-custom.html)
- All texts to be available in both English and Arabic (use google translate)

1. Create a simple server, you can choose the libraries and the database to be used, an easy option is to use [ExpressJS](https://expressjs.com/) with [PostgreSQL](https://node-postgres.com/)
    - The database schema:
  ![](https://i.imgur.com/FhaNUpE.png)


            
        - Database will have a list of users
        - Each user will have at least 1 profile
        - Each profile can have any number of sections (profile items) within
        - Each profile item should be one of [ skills, experiance, education, activity, languages ]
    

    - The server should have the following routes:
        - `/users/signup` to create a new user
        - `/users/login` users login 

        - `/profiles` to create a new profile
        - `/profiles/:id` to get profiles lists related to a user [id]
        - `/profile/update/:id` to update one profile
        - `/profile/delete/:id` to delete profile
        - `/section/post` to create a new section item
        - `/section/:id` to get all section items related to a profile 
        - `/section/update` to update one section
        - `/section/delete` to delete one section


        
2. UI
    - Create a simple Sign up and Login Page 
    - Create a simple dashboard page to manage user profile profile's items 
    - Create a simple page with the ability to create a new profile
    - Create a simple page with the ability to create a new section item
    - Profile page contain user information and list of profiles items
    
