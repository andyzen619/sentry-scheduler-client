# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4
# Set the working directory to /client
WORKDIR /sentry-scheduler-client
# copy package.json into the container at /client
COPY package*.json /sentry-scheduler-client
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /client
COPY . /sentry-scheduler-client
# Make port 3000 available to the world outside this container
EXPOSE 3000
# Run the app when the container launches
CMD ["npm", "start"]