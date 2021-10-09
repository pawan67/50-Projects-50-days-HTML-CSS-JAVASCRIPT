class Github {
  constructor() {
    this.client_id = '3955849d4953ba050629';
    this.client_secret = '39058f4a0e3145b71a41001ffb2cf9dea0183471';
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }
async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret={this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret={this.client_secret}`);
    // const profileResponse = await fetch(`https://api.github.com/users/${user}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return{
        profile,
        repos
    }

}
}
 