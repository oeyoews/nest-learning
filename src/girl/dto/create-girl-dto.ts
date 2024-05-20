import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GirlDto {
  @ApiProperty({ description: 'name', default: 'lily', type: String })
  readonly name: string;

  @ApiProperty({
    description: 'age',
    default: 18,
    minimum: 10,
    type: Number,
    required: true,
  })
  readonly age: number;

  @ApiPropertyOptional({
    description: 'skill',
    default: [],
    type: [String],
  })
  readonly skill: [];
}
