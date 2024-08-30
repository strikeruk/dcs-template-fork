# ** Document Consultancy Services (DCS)**

DCS is an online platform that offers various document drafting services including property, legal etc.
It is a comprehensive web-based platform for documents consultancy services that will allow users to draft and manager a wide range of documents related to property transactions, rentals, agreements and affidavits.

Folder structure:

- backend/: Contains the server-side code, configuration files, and related resources.
- frontend/: Contains the client-side code, assets, and build configurations.
- .gitignore: Specifies files and directories that should be ignored by Git.


While using CI/CD tools like GitHub Actions, GitLab CI, we need need configuration files like:
	.github/workflows/ci.yml for GitHub Actions
	.gitlab-ci.yml for GitLab CI
	
Branching strategy notation:

Instance		Branch		Description, Instructions, Notes
Stable			stable		Accepts merges from Working and Hotfixes
Working			master		Accepts merges from Features/Issues and Hotfixe
Features/Issues	topic-*		Always branch off HEAD of Working
Hotfix			hotfix-*	Always branch off Stable, mostly may not require as we have 6-weeks.

origin/stable to always represent the latest code deployed to production. 

Feature Branches:
	Must branch from: master
	Must merge back into: master
	Branch naming convention: feature-name/id number
	
For bug fixes
	Branch naming convention: bug-number
