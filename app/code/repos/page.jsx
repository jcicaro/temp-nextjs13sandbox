import { FaStar, FaCodeBranch } from 'react-icons/fa';

async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/jcicaro/repos');
    const repos = await response.json();
    return repos;
}

const ReposPage = async () => {

    const repos = await fetchRepos();

    return <div>
        <h1>ReposPage</h1>

        <div>
            {/* {JSON.stringify(repos)} */}
            <ul>
                <FaStar />
                { repos.map((repo) => {
                    return <li key={repo.id}>{JSON.stringify(repo)}</li>
                })
            }
            </ul>
        </div>
    </div>
}

export default ReposPage;
