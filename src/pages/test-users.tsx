import { api } from "../utils/api";

const TestUsers = () => {
	const { data } = api.example.getAllUsers.useQuery();

	return (
		<section>
			<h1>Test users</h1>
			{data ? <p>{data[0]?.name}</p> : "Loading..."}
		</section>
	);
};

export default TestUsers;
