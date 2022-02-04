import os

import click

from App import create_app

env = os.environ.get('FLASK_ENV')
app = create_app(env)


# manager = Manager(app)
# manager.add_command('db', MigrateCommand)
# formal version of start cmd with parameters

@click.command()
# @click.option('--mode', default="develop", type=click.Choice(["develop", "produce"]), help="--develop/--produce")
@click.option('--host', default='127.0.0.1', type=str, help='x.x.x.x')
@click.option('--port', default='8080', type=str, help='1-65535')
def run(host, port):
    app.run(host=host, port=port)


if __name__ == '__main__':
    run()
