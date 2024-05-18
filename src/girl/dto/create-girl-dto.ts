import { IsArray, IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsArray()
  readonly skills: [];
}
