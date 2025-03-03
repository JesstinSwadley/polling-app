import { Router, Request, Response } from "express";

export const optionRouter = Router();

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

optionRouter.post("/create", (req: Request, res: Response) => {
	let { pollId, option } = req.body;

	options.push({
		id: (pollId * 10) + (Math.floor(Math.random() * 10)),
		"option": option,
		pollId
	})

	res.send("Option was created").status(201);
});

optionRouter.get("/all", (req: Request, res: Response) => {
	res.send(options).status(200);
});

optionRouter.patch("/update", (req: Request, res: Response) => {
	let { optionId, updateOption } = req.body;

	const findOption: any = options.find(option => option.id == optionId);

	findOption.option = updateOption;

	res.send(findOption).status(200);
});

optionRouter.delete("/delete", (req: Request, res: Response) => {
	let optionId: any = req.query.optionId;

	const deleteOptionArray = options.filter(option => option.id != optionId);

	options = deleteOptionArray;

	res.send(options).status(200);
});