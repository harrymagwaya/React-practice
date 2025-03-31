pipeline {
  agent any
  stages {
    stage("build"){
      steps {
        // script that executes the cmd on jenkins
        // sh 'npm build'
        echo 'building the application...'
      }
    }
    stage("test"){
      steps {
        echo 'testing the application...'
      }
    }
    stage("deploy"){
      steps {
        echo 'deploying the application...'
      }
    }
  }
}
