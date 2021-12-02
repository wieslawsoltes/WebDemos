using Avalonia.ReactiveUI;
using Avalonia.Web.Blazor;

namespace Core2D.Web;

public partial class App
{
    protected override void OnParametersSet()
    {
        base.OnParametersSet();

        WebAppBuilder.Configure<Core2D.Base.App>()
            .UseReactiveUI()
            .SetupWithSingleViewLifetime();
    }
}