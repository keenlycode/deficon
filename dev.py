import asyncio


async def parcel():
    cmd = "npx parcel watch --target=docs --no-cache 'docs-src/**/*.(ts|js|svg)'"
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()

async def engrave():
    cmd = "engrave dev docs-src docs --server=0.0.0.0:8000"
    print(cmd)
    proc = await asyncio.create_subprocess_shell(cmd)
    await proc.communicate()


async def main():
    await asyncio.gather(
        parcel(),
        engrave(),
    )


asyncio.run(main())