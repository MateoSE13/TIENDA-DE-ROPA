import { ApiProperty,} from "@nestjs/swagger";

export class CreateStoreDto {
    
@ApiProperty()
name: string;
@ApiProperty()
location: string;
@ApiProperty()
website : String;
@ApiProperty()
uphoneNumber :String;
@ApiProperty({default: false })
isActive :  Boolean; 

}


