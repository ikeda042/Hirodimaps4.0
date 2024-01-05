echo "docker login for ECR"
aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 242781479181.dkr.ecr.ap-northeast-1.amazonaws.com
