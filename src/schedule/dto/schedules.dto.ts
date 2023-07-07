import {
    IsNotEmpty,
    // IsBase64,
    IsString,
    IsEmail,
    IsInt
    // IsNumberString,
    // Length,
    // IsDateString,
    // IsAlpha
} from "class-validator";

export class SchedulesDto {
    // @IsNumberString()
    // @Length(10, 10)
    // accountNumber: string;

    @IsInt()
    amount: number;

    // @IsInt()
    // bankId: number;
    //
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEmail()
    email: string;
    //
    // @IsDateString()
    // endDate: string;
    //
    // @IsAlpha()
    // firstName: string;
    //
    // @IsAlpha()
    // lastName: string;
    //
    // @IsNumberString()
    // merchantId: string;
    //
    // @IsString()
    // @IsNotEmpty()
    // narration: string;
    //
    // @IsNumberString()
    // phone: string;
    //
    // @IsBase64()
    // signature: string;
    //
    // @IsDateString()
    // startDate: string;
}
