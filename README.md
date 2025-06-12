## About my Project
Created a simple portfolio page with HTML and CSS, then deploying it securely on amazon Ec2. Using nginx as webserver and also reverse proxy. 
## Steps for deployment
1. Creation of AWS account if you don't have one, navigate to the management console and search for the EC2, then launch an EC2 instance. Use Ubuntu as operating system, configure security groups to allow ssh, http, https and nodejs port(3000).
2. Connect to instance/server using ssh, install nginx as webserver using `sudo apt install nginx`.
3. To get the files for the website, install Git using the `sudo apt install git`. Once Git is installed, create a directory to keep the git project by `mkdir directory-name`. Then use the command `git clone project-ur1` to copy the project files. *Replace project-url with the actual one*.
4. Move the files from the git directory to /var/www/html(this directory is default location for storing website files on Ubuntu).
