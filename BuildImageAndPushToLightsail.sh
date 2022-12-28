docker build -t frontend-app .
aws lightsail push-container-image --region us-east-1 --service-name frontend-container-service --label latest --image frontend-app:latest