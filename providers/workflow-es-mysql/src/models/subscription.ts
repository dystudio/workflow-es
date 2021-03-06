import { Table, Model, Column, Default, PrimaryKey, BelongsTo, DataType} from 'sequelize-typescript'
import { Workflow } from './workflow'

@Table({
    timestamps: false,
    freezeTableName: true
})
export class Subscription extends Model<Subscription> {
    
    @Default(DataType.UUIDV1)
    @Column(DataType.UUID)
    @PrimaryKey
    id: string;
    
    @BelongsTo(() => Workflow)
    workflowId: Workflow;
    
    @Column
    stepId: number;
    
    @Column
    eventName: string;

    @Column(DataType.TEXT)
    get eventKey(): any {
        return JSON.parse(this.getDataValue('eventKey'));
    };
    set eventKey(data: any) {
        this.setDataValue('eventKey', data);
    }
    
    @Column
    subscribeAsOf: Date;
}