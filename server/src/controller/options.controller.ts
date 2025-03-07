import { Request, Response } from "express";

let options = [
	{
		"id": 10,
		"option": "Yes",
		"pollId": 1
	},
	{
		"id": 11,
		"option": "No",
		"pollId": 1
	},
	{
		"id": 20,
		"option": "Abraham Lincoln",
		"pollId": 2
	},
	{
		"id": 21,
		"option": "George Washington",
		"pollId": 2
	},
	{
		"id": 30,
		"option": "Pizza",
		"pollId": 3
	},
	{
		"id": 31,
		"option": "Taco",
		"pollId": 3
	}
]

export const createOptionController = (req: Request, res: Response) => {
	try {
		let { pollId, option } = req.body;

		options.push({
			id: (pollId * 10) + (Math.floor(Math.random() * 10)),
			"option": option,
			pollId
		})
	
		res.send("Option was created").status(201);

		return
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return
	}
}

export const getAllOptionsController = (req: Request, res: Response) => {
	try {
		res.send(options).status(200);

		return
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return
	}
}

export const updateOptionController = (req: Request, res: Response) => {
	try {
		let { optionId, updateOption } = req.body;

		const findOption: any = options.find(option => option.id == optionId);
	
		findOption.option = updateOption;
	
		res.send(findOption).status(200);

		return
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return
	}
}

export const deleteOptionController = (req: Request, res: Response) => {
	try {
		let optionId: any = req.query.optionId;

		const deleteOptionArray = options.filter(option => option.id != optionId);
	
		options = deleteOptionArray;
	
		res.send(options).status(200);

		return
	} catch (error) {
		console.error(error);

		res.status(400).send();

		return
	}
}