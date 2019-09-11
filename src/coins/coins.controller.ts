import { Controller, Get, Req, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { Request } from 'express';
import { CreateCoinDto, UpdateCoinDto } from './dto';

@Controller('coins')
export class CoinsController {
	@Get()
	findAll(@Req() request: Request): string{

		return 'Return all coins';
	}

	@Post()
	async create(@Body() createCoinDto: CreateCoinDto) {
		return 'returns new coins dto';
	}

	@Get(':type')
	findOne(@Param('type') type: string){
		return 'returns specific #${type} coin';
	}

	@Put(':type')
	update(@Param('type') type: string, @Body() updateCoinDto: UpdateCoinDto) {
		return 'updates coin with type #${type}';
	}
	
	@Delete(':type')
	remove(@Param('type') type: string) {
		return 'removes coin with type #${type}';
	}

}
