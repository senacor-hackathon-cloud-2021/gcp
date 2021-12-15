# App Engine Flexible

Since AppEngine flexible totally relies on Docker images, we used the pushed image for the simple node service.
A comparison should happen also between Compute Engine managed instances [](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances),
since in the end AppEngine flexible starts those instances and "manages" those.

## Deployment

### Docker image

You can either let the command `gcloud app deploy` automatically build your container image with CloudBuild,
or you can prebuild the container image, push it to a registry and use that for App Engine flexible by handing in the
`--image-url` flag. I decided to do the later in order to have more control about the container image. See
[App Enngine Flexible Deoployment Guide](https://cloud.google.com/appengine/docs/flexible/dotnet/testing-and-deploying-your-app?hl=en_US).

In order to deploy a new service you'll need a Docker image first for the flex environment. I used the one originating
from [Service Backend](https://github.com/senacor-hackathon-cloud-2021/service-backend) which is available in the
[public dockerhub](https://hub.docker.com/repository/docker/sebastianneb/senacor-hackathon-node-service). So the image
I used was `sebastianneb/senacor-hackathon-node-service:v0.0.1`.

### Deployment via app.yaml

The deployment itself is described in the [app.yaml](app.yaml) file, which is AppEngines way of configuring a service. The
documentation for this configuration yaml can be accessed [here](https://cloud.google.com/appengine/docs/flexible/nodejs/reference/app-yaml).
