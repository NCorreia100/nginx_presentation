FROM node:10
##mkdir docker first
WORKDIR /home/ec2-user/
COPY package*.json /home/ec2-user/
RUN npm i 
COPY . /home/ec2-user/
EXPOSE 3000
CMD ["node","server/index.js"]
