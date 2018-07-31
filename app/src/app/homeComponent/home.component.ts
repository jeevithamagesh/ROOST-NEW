/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../lib/model.methods';
import { BDataModelService } from '../service/bDataModel.service';

/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent implements OnInit {
    dm: ModelMethods;
    currentXsIndex = 0;
    splicedDataSet = [];
    dataSet = [
        {
            img: "assets/Web/photo1.jpg",
            price: "$1,175,000",
            top: "4313 Beverly Hills, CA 90210",
            bottom: "1358 Ligula Street, Unit 12"
        },
        {
            img: "assets/Web/photo2.jpg",
            price: "$1,105,000",
            top: "21 Shop St, San Francisco",
            bottom: "Integer tempor luctus maximus"
        },
        {
            img: "assets/Web/photo3.jpg",
            price: "$1,125,000",
            top: "Beverly Hills, CA 90210",
            bottom: "Duis sollicitudin ante bibendum"

        },
        {
            img: "assets/Web/photo4.jpg",
            price: "$1,185,000",
            top: "132 04th St, San Francisco",
            bottom: "Fusce quis libero nonorcious"
        },
        {
            img: "assets/Web/photo5.jpg",
            price: "$1,185,000",
            top: "132 04th St, San Francisco",
            bottom: "Fusce quis libero nonorcious"
        },
        {
            img: "assets/Web/photo6.jpg",
            price: "$1,185,000",
            top: "132 04th St, San Francisco",
            bottom: "Fusce quis libero nonorcious"
        },
        {
            img: "assets/Web/photo7.jpg",
            price: "$1,185,000",
            top: "132 04th St, San Francisco",
            bottom: "Fusce quis libero nonorcious"
        },
        {
            img: "assets/Web/photo8.jpg",
            price: "$1,185,000",
            top: "132 04th St, San Francisco",
            bottom: "Fusce quis libero nonorcious"
        }
    ];

    constructor(private bdms: BDataModelService) {
        this.dm = new ModelMethods(bdms);
    }

    ngOnInit() {
    }

    changeDataSet(dir) {
        if (dir == 1) {
            this.dataSet.push(this.dataSet.shift());
        }
        else {
            let temp = [];
            temp.push(this.dataSet.pop());
            for (let i = 0; i < this.dataSet.length; ++i) {
                temp.push(this.dataSet[i]);
            }
            this.dataSet = temp;

        }
    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.dm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.dm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.dm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.dm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.dm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete(dataModelName, filter) {
        this.dm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.dm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.dm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
