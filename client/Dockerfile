FROM node

# Create app directory
WORKDIR /usr/src/app/client

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY client/package*.json ./

RUN npm install --save-exact
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

COPY ./client .

EXPOSE 3000
EXPOSE 80
EXPOSE 443
CMD ["npm", "start"]
