
# **PROJECT AND PORTFOLIO I: WEB DEVELOPMENT - ONLINE**

> **Note**: *This document has been meticulously updated to include my personal journey and insights.*

### **Authored by Bradley Matera**

#### *Publish Date: March 10th, 2024*

This document elaborates on various topics explored through research and activities undertaken this week. For a deeper understanding, refer to the curated list of [reference links](#reference-links) at the document's end, which were instrumental in completing this assignment.

---

## **A How-To Guide Using MAC Terminal for this assignment**

Professional developers integrate Terminal into their daily workflow. Understanding its fundamental commands is not just beneficial; it's essential. This section demonstrates its application by guiding you through the creation of my portfolio.

### **Getting Started with Terminal**

- **Open Terminal on Mac**:  You can find the Terminal application in the `/Applications/Utilities` folder, or you can search for it using Spotlight (`Cmd + Space` and type "Terminal"
- **Basic Navigation Commands**: Familiarize yourself with these to effortlessly navigate your system:
**The last bullet provides an example**.


- ``Ctrl+E``: Clear the Screen
- ``PWD``: Print the "Working Directory" // Full path to the working directory
- ``ls``: List files and folders
- ``ls -a``: List files and folders, including invisible files
- ``ls -lh``: List all files and folders, in human-readable form
- ``cd`` [folder: Change directory ex: cd /users/my name/documents/
- ``cd`` /: Change directory, go to root directory
- ``cd`` ~: Change directory and go to user home directory
- ``cd ..``: Change directory, go up one folder level
- ``cd ../..``: Change directory, go up two folder levels
- ``cd ~/Desktop``: Change the directory to my desktop!

## **Exercise:**

**Folder Drop:** Try typing "cd" followed by a space, and then drag a folder into the terminal and press return. Test this out and describe your results below.

**What happened for me**:
It opened up the content directory or the cd when I dragged and dropped it into the terminal after inputting the cmd

```

 ~ cd

 ~ cd

~ /Users/bradleymatera/Desktop/FullSail

```

### Topic: Version Control & Git

Version control, also known as revision control, records changes to a file or set of files over time so that you can recall specific versions later. In this class, we are learning Git. Update the information below where indicated.

**. There are three types of version control.**

- **Local: Only you have access to the repository (No network connection needed)**
- **Centralized: A single central server controls the codebase and everyone works off that same copy**
- **Distributed: Everyone has a full copy of the entire project history; no need for a central authority**

**Using Terminal, these are some essential Git commands to know with their own brief descriptions**

- `git clone repository URL`: Clones a remote repository
- `git config --global user.name"[Your Name]"`: Set up a global username
- `git config --global user.email "[your.email@example.com]"`: Set up a global email address (to match my GitHub account email)
- `git status`: Shows the current state of your directory and staging area
- `git add .`: Add modified files to the next commit
- `git commit -m "[commit message]"`: Make a commit with a new message
- `git log`: Show my commit history
- `git --help`: Show Git's help screen

## **Connecting to GitHub Using Terminal via HTTPS**

Using HTTPS is the recommended method to connect to GitHub in this course. This guide will walk you through the steps of setting up your connection to GitHub using this protocol through the terminal.

### Configuring Your GitHub Credentials

Before you start, you need to configure your GitHub username and email associated with your GitHub account. This is a crucial step for commit history to accurately reflect your contributions.

``git config --global user.name "Your UserName"``

``git config --global user.email "your.email@example.com"``

### Verifying Your Configuration

To ensure your global configuration for user.name and user.email has been set up correctly, you can retype the following commands. They should return the username and email you've just configured.

``git config --global user.name``
``git config --global user.email``

### Cloning a Repository

To clone a repository, navigate to the folder in your terminal where you want to clone the repository and execute the clone command with the repository's HTTPS URL.

 ``Type git clone <https://github.com/username/repo>``

### Wait for a Prompt to Confirm

If required, the terminal may prompt you for your GitHub access credentials. Follow the prompt to enter your access key or password.

If you haven't set up your Personal Access Token (PAT) and it asks for an access key, you will need to visit your GitHub settings to create one.

Upon successful cloning, you'll see messages indicating the progress and completion of the clone operation:
 ``Cloning into 'repository'...
remote: Counting objects: 57, done.
remote: Total 57 (delta 0), reused 0 (delta 0), pack-reused 56.
Receiving objects: 100% (57/57), 49.8KiB | 0 bytes/s, done.``


### Pushing Changes to GitHub

To push changes from your local repository to GitHub, ensure you're in the repository's directory and follow these steps:

Stage your changes (if you have new files or modifications):
``git add .``
Commit your changes with a meaningful commit message:
``git commit -m "Your detailed commit message"``
For a quick commit of all modified and tracked files, you can use:
``git commit -am "Your detailed commit message"``

To amend the most recent commit, perhaps to adjust the commit message or include additional changes, use:
``git commit --amend``

Push your changes to GitHub:
``git push origin master``

**Note: Replace master with the name of the branch you want to push to if you're working on a branch other than master.**

### Pulling Changes from GitHub

To update your local repository with changes from GitHub, ensuring you have the latest version of the code, use the following command:

``git pull origin master``

**Again, replace master with the appropriate branch name if needed. By following these steps, you should be able to successfully connect to, clone, and synchronize your repository with GitHub using the terminal.**
Just replace the placeholders (like `Your UserName`, `your.email@example.com`, `username`, `repository.git`) with your actual GitHub details when you use it.

### Tutorial: Using Git and Nano in Terminal on macOS

#### Prerequisites:

- Git installed on your Mac
- Nano installed on your Mac (usually pre-installed)
- A GitHub repository (In this case, `path-to-repo`)

#### Steps:
1. **Open Terminal on Your Mac**
   - You can find the Terminal application in the `/Applications/Utilities` folder, or you can search for it using Spotlight (`Cmd + Space` and type "Terminal").

2. **Navigate to Your Project Directory**
   - If you just opened the Terminal, you'll likely start in your home directory. If your project directory is located directly within your home directory, navigate to it using the `cd` command. use:
     ```sh
     cd path-to-git-repo
     ```
   - If your project directory is elsewhere, you'll need to provide the full path to it, like so:
     ```sh
     cd /path/to/ repo
     ```

3. **Verify Your Current Branch (Optional)**
   - You can check which Git branch you're currently on with:
     ```sh
     git branch
     ```
   - This will list all local branches and highlight the one you're currently using.

4. **Switch Branches if Necessary**
   - If you need to switch to the `main` branch (or any other branch), use:
     ```sh
     git checkout main
     ```
   - Replace `main` with the name of the branch you wish to switch to, if different.

5. **Pull the Latest Changes**
   - Ensure you have the latest changes from your GitHub repository by pulling them into your local branch:
     ```sh
     git pull origin main
     ```
   - Again, replace `main` with your current branch's name if it's different.

6. **Navigate to the Document's Directory**
   - Based on your last known position, it looks like there was confusion about accessing the `docs` directory. Ensure you are in the root directory of your project (`wdv119-BradleyMatera`), then navigate to `docs` with:
     ```sh
     cd docs
     ```
   - If you receive an error saying the directory doesn't exist, double-check your current location with `pwd` (print working directory) and list the contents of the current directory with `ls` to verify where you are.

7. **Edit a File with Nano**
   - Once in the correct directory, open your Markdown file in Nano:
     ```sh
     nano BradleyMatera-VersionControl.md
     ```
   - This command opens `BradleyMatera-VersionControl.md` in Nano, allowing you to make changes directly in the terminal.

8. **Using Nano**
   - In Nano, use your keyboard to navigate through the file and make edits.
   - To save changes, press `Ctrl + O`, then press `Enter` to confirm.
   - To exit Nano, press `Ctrl + X`.

9. **Commit Your Changes**
   - After editing, you'll want to commit your changes to document them in Git. First, add your changes:
     ```sh
     git add BradleyMatera-VersionControl.md
     ```
   - Then, commit them with a message describing what you did:
     ```sh
     git commit -m "Updated BradleyMatera-VersionControl.md"
     ```

10. **Push Your Changes**
    - Finally, push your commit to GitHub to update the remote repository:
      ```sh
      git push origin main
      ```
    - Replace `main` with the name of the branch you're working on if necessary.



### **Using .gitignore and Why it's Important**

Most repositories contain a .gitignore file.

- What is the purpose of this file?
<br>

The .gitignore file specifies intentionally untracked files that Git should ignore. This is useful for ignoring build artifacts, personal IDE config files, and other files that don't need to be version-controlled.

- What is the "**.DS_Store**" file and why would you want to ignore it?
<br>
  .DS_Store is a file created by macOS Finder to store custom attributes of folders and files. It should be ignored because it's a system-generated file that doesn't need to be version-controlled.

- What other file or folder would you want to add to a .gitignore file and why?

 Node modules folder (node_modules/) - this contains dependencies installed by Node.js package managers which shouldn't be committed to version control.
<br>

### Reference Links

Research Summary: What resource(s) did you find most helpful this past week and why?

**Terminal Commands**  
[Link For Terminal Commands](https://github.com/0nn0/terminal-mac-cheatsheet#english-version)

**Three Types of Version Control**  
[Link For my research on the 3 types of version controls 1](https://about.gitlab.com/topics/version-control/)

[Link For my research on the 3 types of version controls 2](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)

**Git Commands**  
[Git Commands](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#hiding-content-with-comments)

**Connecting to GitHub using Terminal**  
[Connecting To Git Hub using Terminal 1](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git)

[Connecting To Git Hub using Terminal 2](https://gist.github.com/albatrocity/1201187/5247457788890f0795a6e121275867e3551d0dc2)

**Using .gitignore and Why it's Important**  
[Reaserch For Git Ignore 1](https://git-scm.com/docs/gitignore#:~:text=The%20purpose%20of%20gitignore%20files,being%20reintroduced%20in%20later%20commits.)

[Reaserch For Git Ignore 2](https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo/)
