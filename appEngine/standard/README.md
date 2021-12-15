# App Engine Standard

App Engine standard relies only on a specific runtime. Since nodejs16 is supported,
I choose this. The source code was copied inline here so that we can deploy everything
out of this single repository.
Before you read this, you should read the documentation about the [Flexible environment](../flexible).

## Deployment

For the standard environment we again need an `app.yaml`. Since we already have a default and a flexible service
we just need a "standard" service now. Therefore I created the file [](standard.app.yaml).
I also had to create a VPC connector so that the standard environment can access resources within the VPC by following
[this guide](https://cloud.google.com/appengine/docs/standard/nodejs/connecting-vpc).
The actual deployment can then be done by executing `gcloud app deploy standard.app.yaml --version 0`
