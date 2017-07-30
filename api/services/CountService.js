'use strict';

class Count {

    constructor(shouldRun) {
        this.shouldRun = shouldRun;
        this.count = 0;

        sails.on('lifted', () => {
            this.startBackgroundProcess();
        });
    }

    startBackgroundProcess () {

        if(this.shouldRun){

            this.refreshInterval = setInterval( (() =>{

                if(this.count > 5){
                    this.stopBackgroundProcess();
                } else{
                    this.countBackground()
                }

            } ), 1000 );
        } else {
            this.stopBackgroundProcess();
        }
    }

    countBackground(){
        console.log(this.count);
        this.count++;
    }

    stopBackgroundProcess () {
        clearInterval(this.refreshInterval);
        console.log('stop')
    }

}

// module.exports = new Count(false);
