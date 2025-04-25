FROM next:15.1.7 as build

COPY application frontend/application
COPY package.json /application

WORKDIR /application
RUN npm install yarn
RUN yarn install

EXPOSE 8080

CMD [ "yarn build" ]