import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty({ description: 'name', default: 'lily', type: String })
  readonly name: string;

  @ApiProperty({ description: 'age', default: 18, minimum: 10, type: Number })
  readonly age: number;

  @ApiProperty({ description: 'skill', default: [], type: [String] })
  readonly skill: [];
}
