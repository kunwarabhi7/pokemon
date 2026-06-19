pipeline{
	agent any
	stages{
		stage("Build Docker Image"){
			steps{
				sh 'docker build -t pokemon-app .'
			}
		}
		stage("Deploy Container"){
			steps{
				sh '''
				docker rm -f pokemon-app || true
				docker run -d -p 3000:3000 --name pokemon-app pokemon-app
				'''
			}
		}
	}
}