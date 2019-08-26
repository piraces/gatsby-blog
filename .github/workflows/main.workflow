workflow "Main Workflow" {
  resolves = ["managedkaos/merge-pull-request@master"]
  on = "pull_request"
}

action "Filters for GitHub Actions-actor" {
  uses = "actions/bin/filter@3c98a2679187369a2116d4f311568596d3725740"
  args = "actor dependabot-preview"
}

action "Auto Approve" {
  needs = ["Filters for GitHub Actions-actor"]
  uses = "hmarr/auto-approve-action@master"
  secrets = ["GITHUB_TOKEN"]
}

action "managedkaos/merge-pull-request@master" {
  uses = "managedkaos/merge-pull-request@master"
  needs = ["Auto Approve"]
  secrets = ["GITHUB_TOKEN"]
}
